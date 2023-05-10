import React from "react";

// imports from stream chat react
import { ChannelList, useChatContext } from "stream-chat-react";
// ChannelList component displays all the channels in a user interface.
// Its prebuilt component leverages the stream chat api to retrieve all channels
//usechatcontext -> this helps stream chat react library to allow components to access stream chat context and functionality
//when its used it provides access to chatclient object

import Cookies from "universal-cookie";

import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";
import ChannelSearch from "./ChannelSearch";

import Hosp from "../../src/assets/hospital.png";
import Logout from "../../src/assets/logout.png";
import Hospital from "../lotti/Hospital";
const Sidebar = () => (
  <>
    <div className="channel-list__sidebar">
      {/* <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <Hospital/>
        </div>
      </div> */}
      <Hospital />
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={Logout} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  </>
);
//above is arrow function with return empty values here it return sidebar
//{} with this bracket arrow function return nothing

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p
      className="channel-list__header__text"
      style={{
        fontStyle: "initial",
        fontFamily: "monospace",
        color: "white",
        fontSize: "19px",
        fontWeight: "700",
      }}
    >
      MediChat
    </p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
