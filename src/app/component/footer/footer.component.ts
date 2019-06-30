import { Footer } from './../../collections/info-property';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: Footer;
  submitted = false;
  error = '';
  mailChimpEndpoint = 'https://nkbridal.us20.list-manage.com/subscribe/post-json?u=065cdae3a6a55db9b6796733f&amp;id=11e46dedf8&'
  constructor(private service: ApiServiceService, private http: HttpClient) { }

  email;
  ngOnInit() {
    this.getFooter();
  }

  getFooter() {
    this.service.getFooter()
      .subscribe(res => {
        this.footer = res[0];
      })
  }

  /* Subscribe Mailchimp */
  submit() {
    let emailControl = new FormControl(this.email, [
      Validators.required,
      Validators.email,
    ]);
    this.error = '';
    if (emailControl.status === 'VALID') {

      const params = new HttpParams()
        .set('EMAIL', emailControl.value)

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
        }
        else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    }
  }

}
