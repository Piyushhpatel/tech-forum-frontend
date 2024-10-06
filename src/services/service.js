import axios from "axios";

export class Service {
  async fetchPosts(uri) {
    const url = uri || "api/posts";
    try {
      const post = await axios.get(url);

      if (!post) {
        console.log("Error fetching posts");
      }

      return post.data;
    } catch (error) {
      console.log("Error fetching posts service", error.message);
    }
  }

  async fetchCategories() {
    const url = "api/categories";
    try {
      const categories = await axios.get(url);

      if (!categories) {
        console.log("Error fetching categories");
      }

      return categories.data;
    } catch (error) {
      console.log("Error fetching categories service", error.message);
    }
  }
}

const service = new Service();
export default service;
