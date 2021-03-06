import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ImageUploading from 'react-images-uploading';

// this component allows user to add and remove images for submission
// see material ui & react-images-uploading docs

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className='image-upload-wrapper'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove }) => (
          <div className='upload__image-wrapper'>
            <Button variant='contained' onClick={onImageUpload} color='primary'>
              Upload Photo
            </Button>
            &nbsp;
            <Button
              variant='contained'
              onClick={onImageRemoveAll}
              color='secondary'>
              Remove All
            </Button>
            <div
              style={{
                display: 'flex',
                marginTop: '12px',
                flex: '0 0 350px',
              }}>
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <div>
                    <Badge
                      color='secondary'
                      badgeContent={
                        <span onClick={() => onImageRemove(index)}>x</span>
                      }
                      style={{ cursor: 'pointer', marginRight: '12px' }}>
                      {
                        <img
                          src={image['data_url']}
                          alt=''
                          width='75'
                          height='75'
                        />
                      }
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
