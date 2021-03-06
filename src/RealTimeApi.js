export default class RealTimeApi {

    goFetch = (uri, inputOptions) => {
      const { headers, ...extraOpts } = inputOptions || {};
      const options = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          ...(headers || {})
        },
        mode: "cors",
        ...extraOpts
      }
      return fetch(uri, options)
      .then(response => {
        if (!response.ok) {
          const err = new Error(response.statusText);
          err.res = response;
          throw err;
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log('from fetch', err);
      });
    };
  
    getRecipes = async () => {
      const url = `http://localhost:3001/recipes`;
      const recipes = await this.goFetch(url, {
        method: 'GET',
      });
      return recipes ? recipes : {};
    }

    getSpecials = async () => {
      const url = `http://localhost:3001/specials`;
      const specials = await this.goFetch(url, {
        method: 'GET',
      });
      return specials ? specials : {};
    }

    updateRecipe = async (uuid, payload) => {
      // const url = `http://localhost:3001/recipes/${uuid}`;
      // const userConfig = await this.goFetch(url, {
      //   method: 'PUT',
      //   body: JSON.stringify({ payload })
      // });
      return {'uuid': uuid, 'payload': payload}
    };

    deleteRecipe = async (uuid) => {
      const url = `http://localhost:3001/recipes/${uuid}`;
      const response = await this.goFetch(url, {
        method: 'DELETE',
      });
      return response ? response : {};
    };
  
  
  }