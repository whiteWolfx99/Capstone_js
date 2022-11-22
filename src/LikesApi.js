class LikesApi {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvkLjRRWATbZfhQ7TGpS/likes';
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
}

module.exports = LikesApi;
