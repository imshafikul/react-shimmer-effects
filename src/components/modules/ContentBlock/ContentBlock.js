import React from "react";
import Card from "../../common/Card";
import { Thumbnail } from "../../common/Image";
import Title from "../../common/Title";
import Text from "../../common/Text";
import Button from "../../common/Button";
import PropTypes from "prop-types";
import classNames from "classnames";

const ContentBlock = ({
  card,
  title,
  text,
  cta,
  thumbnailWidth,
  thumbnailHeight,
  reverse,
}) => {
  const renderContent = () => {
    return (
      <div
        className={classNames({
          flex: true,
          "flex-reverse": reverse,
        })}
      >
        <div
          className={classNames({
            flex: true,
            "w-50": !thumbnailWidth,
          })}
        >
          <Thumbnail
            width={thumbnailWidth}
            height={thumbnailHeight}
            className="h-100 m-0"
          />
        </div>
        <div className=" flex-1 p-30">
          {title && <Title className="w-40" line={1} />}
          {text && <Text />}
          {cta && <Button />}
        </div>
      </div>
    );
  };

  if (!card) return renderContent();

  return <Card>{renderContent()}</Card>;
};

ContentBlock.propTypes = {
  card: PropTypes.bool,
  title: PropTypes.bool,
  text: PropTypes.bool,
  cta: PropTypes.bool,
  thumbnailWidth: PropTypes.number,
  thumbnailHeight: PropTypes.number,
  reverse: PropTypes.bool,
};

ContentBlock.defaultProps = {
  card: true,
  title: false,
  text: false,
  cta: false,
  reverse: false,
};
export default ContentBlock;
