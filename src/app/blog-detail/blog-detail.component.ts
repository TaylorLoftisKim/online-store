import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../blog.model';
import {BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  providers: [BlogService]
})
export class BlogDetailComponent implements OnInit {
  blogId: number = null;
  blogPicked: Blog;

  constructor(private route: ActivatedRoute, private location: Location, private blogService: BlogService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogId = parseInt(urlParameters['id']);
    });
    this.blogPicked = this.blogService.getBlogById(this.blogId);
  }

}
