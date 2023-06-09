import { onReady, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';

export interface ShareAppMessageOptions {
  title: string;
  path: string;
  imageUrl?: string;
  content?: string;
  desc?: string;
  bgImgUrl?: string;
  query?: string;
  success?: (result?: any) => void;
  fail?: (error?: Error) => void;
  complete?: () => void;
}

export const useShareAppMessage = (options?: Partial<ShareAppMessageOptions>) => {
  onReady(() => {
    onShareAppMessage((): any => {
      const pages = getCurrentPages();
      const currentPageFullpath = pages[0].$page?.fullPath || '/pages/index/index';

      return {
        title: 'AI智能私人小助理:AI助手，智能办公小程序，小红书、大众点评、日报、节日祝福等',
        path: currentPageFullpath,
        success: (res: any) => {
          // 转发成功
          console.log('转发成功', res);
        },
        fail: (error: any) => {
          // 转发失败
          console.log('转发失败', error);
        },
        ...options,
      };
    });
  });
}

export interface ShareTimelineOptions {
  title: string;
  path: string;
  query?: string;
  imageUrl?: string;
  imageUrlId?: string;
  imagePreviewUrl?: string;
  imagePreviewUrlId?: string;
}

export const useShareTimeline = (options?: Partial<ShareTimelineOptions>) => {
  onReady(() => {
    onShareTimeline((): any => {
      const pages = getCurrentPages();
      const currentPageFullpath = pages[0].$page?.fullPath || '/pages/index/index';

      return {
        title: 'AI智能私人小助理:AI助手，智能办公小程序，小红书、大众点评、日报、节日祝福等',
        path: currentPageFullpath,
        ...options
      };
    });
  });
}
