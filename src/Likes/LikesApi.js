class LikesApi {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cNZqM0oVNMyctsSAIcbv/likes';
  }

      getmethod = async () => {
        const result = await fetch(
          `${this.baseURL}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
          .then((res) => res.json())
          .catch((err) => err);
        return result;
      };

      postmethod = async (Id) => {
        const result = await fetch(
          `${this.baseURL}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item_id: Id }),
          },
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error('Something went wrong on api server!');
            }
            return res.json();
          })
          .catch((err) => err);

        return result;
      };
}

module.exports = LikesApi;
