//
//  Streaming.h
//  StreamingSDK
//
//  Created by Me on 11/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import "AppDelegate.h"
#import "React/RCTBridgeModule.h"
@import QiscusStreaming;

@interface Streaming : NSObject <RCTBridgeModule>

@property QiscusStreaming *client;

@end
