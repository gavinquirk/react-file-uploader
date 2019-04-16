import React, { Fragment, useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('Choose File');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <Fragment>
      <form>
        <div class='custom-file mb-4'>
          <input
            type='file'
            class='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label class='custom-file-label' htmlFor='customFile'>
            {fileName}
          </label>
        </div>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
