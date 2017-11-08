//
//  Streaming.m
//  StreamingSDK
//
//  Created by Me on 11/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "Streaming.h"
#import <React/RCTLog.h>

@implementation Streaming

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setup:(NSString *)appID) {
  RCTLogInfo(@"setup Streaming %@", appID);
  self.client   = [QiscusStreaming shared];
  [self.client setupWithAppId:appID];
}

RCT_EXPORT_METHOD(createStreaming:(NSString *)title tags:(NSArray<NSString *> *)tags callback:(RCTResponseSenderBlock)callback ) {
  RCTLogInfo(@"create Streaming");
  
  [self.client createStreamWithTitle:title tags:tags completion:^(Stream *stream) {
    RCTLogInfo(@"create Streaming %@", stream.streamUrl);
    
    if (stream != NULL) {
      callback(@[[NSNull null], stream.streamUrl]);
    }else {
      callback(@[[NSNull null], @"Error"]);
    }
  }];
};

RCT_EXPORT_METHOD(buildStreaming:(NSString *)url) {
  RCTLogInfo(@"build Streaming");
  [self.client buildStreamWithStreamUrl:url completionHandler:^(UIViewController *target, NSError *error) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      target.modalPresentationStyle = UIModalPresentationFullScreen;
      AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
      [delegate.rootViewController presentViewController:target animated:YES completion:nil];
    });
  }];
}

@end
