class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const response = await fetch(`/api/github/${user}`);

    const data = await response.json();

    return data;
  }
}