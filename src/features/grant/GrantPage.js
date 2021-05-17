import React, { useEffect } from 'react';
// @material-ui/core components
// @material-ui/icons
// import Close from "@material-ui/icons/Close";
// core components
// sections for this page
import SectionTitle from './sections/SectionTitle';
import SectionPools from './sections/SectionPools';
import CustomGrant from "components/CustomGrant/CustomGrant.js";
// hooks

export default function GrantPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <CustomGrant />
      <SectionTitle />
      <SectionPools />
    </>
  );
}