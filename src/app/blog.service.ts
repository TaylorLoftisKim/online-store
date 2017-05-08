import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { BLOGS } from './mock-blog';

@Injectable()
export class BlogService {

  constructor() { }

getBlogs() {
return BLOGS;
}

getBlogById(blogId: number){
  for (var i = 0; i <= BLOGS.length - 1; i++) {
    if (BLOGS[i].id === blogId) {
      return BLOGS[i];
    }
  }
}

}
