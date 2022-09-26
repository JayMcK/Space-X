import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function ShareFeature() {
  const shareURL = "https://space-x-ebon.vercel.app/upcoming-launch";
  const quote = "Don't miss the next launch to Mars!";
  const hashtag = "#marsishome";

  return (
    <div className="flex flex-row space-x-2">
      <div>
        <FacebookShareButton url={shareURL} quote={quote} hashtag={hashtag}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url={shareURL}
          title={quote}
          summary={quote}
          source={shareURL}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </div>
      <div>
        <RedditShareButton url={shareURL} title={quote}>
          <RedditIcon size={40} round={true} />
        </RedditShareButton>
      </div>
      <div>
        <TwitterShareButton url={shareURL} title={quote} hashtags={[hashtag]}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </div>
      <div>
        <WhatsappShareButton url={shareURL} title={quote}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
