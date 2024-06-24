class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // const response = await fetch(`/api/github/${user}`); 
    const response = await fetch(`http://localhost:5000/api/github/${user}`); 
    

    if (!response.ok){
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    return data;
  }
}