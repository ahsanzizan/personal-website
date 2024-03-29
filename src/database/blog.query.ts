import BlogModel from "@/models/Blog.model";
import { connectAndQuery } from "../utils/utilityFunctions";
import { Blog } from "@/types/models";

export async function getAllBlogs(): Promise<Blog[]> {
  return connectAndQuery(async () => await BlogModel.find());
}

export async function getBlogById(id: string): Promise<Blog | null> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await BlogModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

export async function getBlogByLink(link: string): Promise<Blog | null> {
  return connectAndQuery(async () => {
    try {
      return await BlogModel.findOne({ link });
    } catch (error) {
      return null;
    }
  });
}

export async function deleteBlogById(id: string) {
  return connectAndQuery(async () => {
    try {
      await BlogModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}

type UpsertBlogInput = {
  title?: string;
  content?: string;
  link?: string;
  author?: string;
  tags?: string[];
};

export async function upsertBlog(id: string, blog: UpsertBlogInput) {
  return connectAndQuery(async () => {
    try {
      await BlogModel.findByIdAndUpdate(id, { ...blog }, { upsert: true });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
}
