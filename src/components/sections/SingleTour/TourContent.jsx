import React from 'react'

const TourContent = ({ contentData }) => {
  const paragraphs = contentData?.content.map((paragraph, index) => {
    // Since each 'paragraph' has its own 'content' array, we map over it to extract the 'value'
    return paragraph.content.map((textNode, subIndex) => (
      <p  key={`${index}-${subIndex}`} className="mt-4 mx-10">{textNode.value}</p>
    ));
  });

  return <div>{paragraphs}</div>;
};

export default TourContent