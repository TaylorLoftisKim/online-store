import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogService){}

  blogs: Blog[] = [];
  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  goToBlogDetailPage(clickedBlog: Blog){
    this.router.navigate(['blogs', clickedBlog.id]);
  };

}
