class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    try {
      const response = await fetch(`http://localhost:5000/api/github/${user}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user:', error.message);
      throw error;
    }
  }
}
