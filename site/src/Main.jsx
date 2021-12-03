import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldData: props.selectedData ?? 'account_flags',
      loadedData: props.selectedData ?? 'account_flags',
      data: [],
    }
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const { loadedData } = this.state;

    fetch(`/data/${loadedData}.json`)
      .then(res => res.json())
      .then(obj => {
        /*
          [
            {
              id: "categoryName",
              data: {
                "flag_name": <default_value>,
              }
            }
          ]
        */
        const data = [];

        if (loadedData === 'account_flags' || loadedData === 'zone_flags') {
          for (const key of Object.keys(obj)) {
            data.push({
              id: key,
              data: obj[key],
            });
          }
        } else if (loadedData === 'account_entitlements' || loadedData === 'zone_entitlements') {
          /*
            {
              "id": "access.users_allowed",
              "feature": {
                  "feature_set": "access",
                  "id": 365,
                  "key": "access.users_allowed",
                  "name": "Access - Users Allowed"
              },
              "allocation": {
                  "value": 5,
                  "type": "max_count"
              },
              "created_date": "2020-06-09T12:00:40.000000",
              "edited_date": "2021-08-16T20:30:36.000000",
              "deleted_date": ""
            }
          */
          const categories = {};

          for (const entitlement of obj) {
            let category = categories[entitlement.feature.feature_set] ?? {};

            category[entitlement.id] = entitlement.allocation.value;
            categories[entitlement.feature.feature_set] = category;
          }

          for (const key of Object.keys(categories)) {
            data.push({ id: key, data: categories[key] });
          }
        } else if (loadedData === 'zone_settings') {
          const dataObj = {};
          for (const setting of obj) {
            dataObj[setting.id] = setting.value;
          }
          data.push({ id: 'Zone Settings', data: dataObj });
        }

        this.setState({ oldData: loadedData, loadedData, data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { loadedData, data } = this.state;

    const name = toTitleCase(loadedData);

    return (
      <div className='container'>
        <h1>{name}</h1>

        {data.map(category => <Category key={category.id} category={category} />)}
      </div>
    );
  }
}

function Category({ category }) {
  return (
    <div className='category'>
      <h2>{toTitleCase(category.id)}</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(category.data).map(([flag, value]) => <CategoryValue key={flag} flagName={flag} value={value} />)}
        </tbody>
      </table>
    </div>
  );
}

function CategoryValue({ flagName, value }) {
  return (
    <tr>
      <td>{flagName}</td>
      <td>{valueString(value)}</td>
    </tr>
  );
}

function valueString(value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else if (typeof value !== 'string') {
    return "" + value;
  } else {
    return value;
  }
}

function toTitleCase(str) {
  return str.toLowerCase()
    .replaceAll('_', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}