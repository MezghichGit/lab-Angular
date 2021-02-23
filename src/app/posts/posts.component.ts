import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 posts ;
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      response => {
        this.posts = response;
        console.log(this.posts)
      }
    )
  }

}
