import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: '../../assets/css/main.scss'
})
export class LandingPageComponent implements OnInit, AfterViewInit  {
  @ViewChild('bgvid') vid!: ElementRef;
  @ViewChild('#polina button') pauseButton!: ElementRef;
  
  //@ViewChildren('#polina button')
  //pauseButton!: QueryList<ElementRef>;
  
  //vid = document.getElementById("bgvid");
  //pauseButton = document.querySelector("#polina button");

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    const posts = [
      {
        videoId: "fade3536",
        pageTitle: "A woman who build her home",
        postDate: "June 18, 2017",
        videoUrl: "assets/videos/daniel.mp4",
        Type: "video/mp4"
      
      },
       {
         videoId: "kode5476",
         pageTitle: "The man of my dream",
         postDate: "Mar 18, 2019",
         videoUrl: "assets/videos/theweekend.mp4",
         Type: "video/mp4"
      
       },
         {
         videoId: "jkde5498",
         pageTitle: "The woman who makes the money",
         postDate: "June 23, 2018",
         videoUrl: "assets/videos/twws.mp4",
         Type: "video/mp4"
         },
          {
            videoId: "jkde5498",
            pageTitle: "The woman who makes the money",
            postDate: "November 17, 2000",
            videoUrl: "assets/videos/daniel.mp4",
            Type: "video/mp4"
          }
      ];
  }
  ngOnInit(): void {
    console.log('The vid dom');
  }

  ngAfterViewInit() {
    console.log('The vid dom 2', this.vid);
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      if (this.vid !== null && this.vid !== undefined) { 
        //this.renderer.removeAttribute(this.vid.nativeElement, 'autoplay');
        this.vid.nativeElement.pause();
        this.pauseButton.nativeElement.innerHTML = "Paused";
        
        this.renderer.listen(this.vid.nativeElement, 'pause', (event) => {
          console.log('Video paused');
        });
      }
    }

    const vidFade = () => {
      this.vid.nativeElement.classList.add("stopfade");
    }
    
    this.vid.nativeElement.addEventListener('ended', () =>
    {
    // only functional if "loop" is removed 
    this.vid.nativeElement.pause();
    // to capture IE10
    vidFade();
    }); 


    this.renderer.listen(this.pauseButton.nativeElement, 'click', (event) => {
      console.log('Video started playing');
    });

    this.pauseButton.nativeElement.addEventListener("click", () => {
      this.vid.nativeElement.classList.toggle("stopfade");
      if (this.vid.nativeElement.paused) {
        this.vid.nativeElement.play();
        this.pauseButton.nativeElement.innerHTML = "Pause";
      } else {
        this.vid.nativeElement.pause();
        this.pauseButton.nativeElement.innerHTML = "Paused";
      }
    })
  }
 


}
