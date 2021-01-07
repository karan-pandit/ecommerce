import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

import {addCollectionAndDocuments} from '../../firebase/firebase.utils';

const Directory = ({ sections }) => {
  return (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);
  }



const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

// const sections = [
//   {
//     title: 'hats',
//     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//     id: 1,
//     linkUrl: 'hats'
//   },
//   {
//     title: 'jackets',
//     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//     id: 2,
//     linkUrl: ''
//   },
//   {
//     title: 'sneakers',
//     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//     id: 3,
//     linkUrl: ''
//   },
//   {
//     title: 'womens',
//     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//     size: 'large',
//     id: 4,
//     linkUrl: ''
//   },
//   {
//     title: 'mens',
//     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//     size: 'large',
//     id: 5,
//     linkUrl: ''
//   }
// ]