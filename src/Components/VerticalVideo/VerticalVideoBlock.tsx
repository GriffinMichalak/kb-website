import { type ReactNode } from 'react';
import './VerticalVideoBlock.scss';

type VerticalVideoBlockProps = {
  videoPosition: 'left' | 'right';
  embed: ReactNode;
  whatWasDone: ReactNode;
  performance: ReactNode;
};

export const VerticalVideoBlock = ({ videoPosition, embed, whatWasDone, performance }: VerticalVideoBlockProps) => (
  <div className={`vertical-video-block vertical-video-block--video-${videoPosition}`}>
    <div className="vertical-video-block__video">{embed}</div>
    <div className="vertical-video-block__details">
      <div className="vertical-video-block__box">
        <div className="vertical-video-block__box-label">What was done</div>
        <div className="vertical-video-block__box-content">{whatWasDone}</div>
      </div>
      <div className="vertical-video-block__box">
        <div className="vertical-video-block__box-label">Performance</div>
        <div className="vertical-video-block__box-content">{performance}</div>
      </div>
    </div>
  </div>
);
