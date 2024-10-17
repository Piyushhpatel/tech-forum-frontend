import axios from "axios";

export class Service {
  async fetchPosts() {
    try {
      const post = await axios.get("/api/posts");
      if (!post) {
        console.log("Error fetching posts");
      }

      return post.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchMorePosts(uri) {
    try {
      const post = await axios.get(`/api/${uri}`);
      if (!post) {
        console.log("Error fetching posts");
      }

      return post.data;
    } catch (error) {
      throw error;
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
      throw error;
    }
  }

  async createPost({title, content, category}) {
    try {
      const response = await axios.post("/api/posts", {title, content, category});
      if(response){
        return response.data;
      }
    } catch (error) {
      throw error;
    }

    return false;
  }
}

const service = new Service();
export default service;
