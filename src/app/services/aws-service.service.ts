import { UploadProducts, uploadThumb } from 'src/app/collections/info-property';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ApiServiceService } from './api-service.service';
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk'
import * as S3 from 'aws-sdk'
import { Info } from '../collections/info-property';
import { variable } from '@angular/compiler/src/output/output_ast';
// Declare AWS
let bucketName = 'nkbridal-data';
/* /.DeclareAWS */
@Injectable({
  providedIn: 'root'
})
export class AwsServiceService {

  constructor(public service: ApiServiceService) {

  }

  uploadFile(albumName, files, id,poolId) {  
        AWS.config.region = 'ap-southeast-2'
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: poolId,
        })
        let s3 = new AWS.S3({
          apiVersion: '2006-03-01'
        });
        // START

        for (let i = 0; i < files.length; i++) {
          let params = {
            Bucket: 'nkbridal-data' + `/${albumName}-Album`,
            Key: 'Thumbnail-'+files[i].name,
            Body: files[i],
            ACL: 'public-read',
          }
          s3.upload(params, (err, data) => {
            if (err) {
              alert(err)
            } else {
              let paramsThumb = {
                "s3_image": params.Key,
                "id_product": id,
                "image": data.Location
              }
              this.service.addThumb(paramsThumb)
                .subscribe(res => {
                  console.log(res);
                })
            }
          })

        }
  }
  deleteFile(albumName, files) {
    let pool;

    this.service.getSetting()
      .subscribe(res => {

        pool = res[0].value;
        AWS.config.region = 'ap-southeast-2'
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: pool,
        })
        let s3 = new AWS.S3({
          apiVersion: '2006-03-01'
        });
        // START
          let params = {
            Bucket: 'nkbridal-data' + `/${albumName}-Album`,
            Key: files,
          }
          s3.deleteObject(params, (err, data) => {
            if(err)
            {
              console.log(data)
            }
          })

      })
  }
}

