import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  headlineData: any;
  show: boolean = false;
  initialLoad: boolean = true;
  storyIndex: any;
  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.getLatestHeadlines();
  }

  getLatestHeadlines(): void {
    this.storyService.getLatestHeadlines().subscribe((res) => {
      this.headlineData = res;
      this.headlineData?.articles?.forEach((item: any) => {
        item.isClicked = false;
      });
    })
  }
  changeShow(indx: any): void {
    this.initialLoad = false;
    this.headlineData?.articles?.forEach((item: any, index: any) => {
      if (index == indx) {
        item.isClicked = !item.isClicked;
        return;
      }
    });

  }

  onScroll(e: any) {
    if (this.headlineData?.articles.length > 30) {
      return;
    }
    const moreHeadlines = this.headlineData?.articles;
    this.headlineData.articles = [...this.headlineData?.articles, ...moreHeadlines];
  }

}
