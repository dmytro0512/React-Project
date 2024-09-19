// Assets
import ArrowLeftIcon from "@/assets/img/quest/arrow-left.png";
import UserAvatar from "@/assets/img/quest/user-avatar.png";
import InboxIcon from "@/assets/img/quest/inbox.png";
import CollapseIcon from "@/assets/img/quest/collapse.png";
import BgImage from "@/assets/img/quest/button.png";
import LongBgImage from "@/assets/img/quest/long-button.png";

// MUI Components
import { Box, Button, styled } from "@mui/material";

// Constants
import { FontWeight } from "@/consts/fontWeight";
import { FontSize } from "@/consts/fontSize";
import { TextColor } from "@/consts/textColor";
import { TextShadow } from "@/consts/textShadow";

function Overlay() {
  const OverlayWrapper = styled(Box)(() => ({
    position: "fixed",
    padding: "14px 20px",
    left: 0,
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 10,
  }));

  const SubOverlay = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  }));

  const MiniButton = styled(Button)({
    width: "56px",
    height: "56px",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "100% 100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const ProfileButton = styled(Button)(() => ({
    width: "200px",
    height: "64px",
    backgroundImage: `url(${LongBgImage})`,
    backgroundSize: "100% 100%",
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
    padding: "8px 10px",
  }));

  return (
    <OverlayWrapper>
      <SubOverlay>
        <MiniButton>
          <Image url={ArrowLeftIcon} alt="Arrow Left" />
        </MiniButton>
        <ProfileButton>
          <Image url={UserAvatar} alt="User Avatar" width={40} height={40} />
          <Span>PLAYER PROFILE</Span>
        </ProfileButton>
      </SubOverlay>
      <SubOverlay>
        <MiniButton>
          <Span sx={{ fontSize: FontSize.M }}>$</Span>
        </MiniButton>
        <MiniButton>
          <Image url={InboxIcon} alt="Inbox Icon" />
        </MiniButton>
        <MiniButton>
          <Image url={CollapseIcon} alt="Collapse Icon" />
        </MiniButton>
      </SubOverlay>
    </OverlayWrapper>
  );
}

export const Image = ({
  url,
  alt,
  width,
  height,
}: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  return <img src={url} alt={alt} width={width} height={height} />;
};

export const Img = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "45px",
  },
}));

export const Span = styled(Box)({
  fontWeight: FontWeight.XL,
  fontSize: FontSize.XS,
  color: TextColor.dark2,
  textShadow: TextShadow.dark,
});

export default Overlay;
