import React from 'react'

import ImageUploading, { ImageType } from 'react-images-uploading'
import { ImageListType } from 'react-images-uploading/dist/typings'

import { Box, Button, Grid } from '@mui/material'

interface UploaderProps {
    images: ImageType[]
    onImagesChange: (
        imageList: ImageListType,
        addUpdateIndex?: number[]
    ) => void
    maxUploadedPhotos: number
}

const UploaderComponent = (props: UploaderProps) => {
    const { images, onImagesChange, maxUploadedPhotos } = props

    return (
        <Box>
            <ImageUploading
                multiple
                value={images}
                onChange={onImagesChange}
                maxNumber={maxUploadedPhotos}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }: any) => (
                    <Box className="upload__image-wrapper">
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    type="button"
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                >
                                    Click or Drop to add photos
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    onClick={onImageRemoveAll}
                                    type="button"
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth
                                >
                                    Click to remove all images
                                </Button>
                            </Grid>
                            {/* eslint-disable dot-notation */}
                            <Grid container item>
                                {imageList.map(
                                    (image: ImageType, index: number) => (
                                        <Grid
                                            container
                                            item
                                            xs={6}
                                            key={index.toString()}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item xs={6}>
                                                <img
                                                    src={image['data_url']}
                                                    alt=""
                                                    width="100"
                                                />
                                            </Grid>

                                            <Box className="image-item__btn-wrapper">
                                                <Grid item xs={3}>
                                                    <Button
                                                        onClick={() =>
                                                            onImageUpdate(index)
                                                        }
                                                        type="button"
                                                        color="secondary"
                                                    >
                                                        Update
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Button
                                                        onClick={() =>
                                                            onImageRemove(index)
                                                        }
                                                        type="button"
                                                        color="secondary"
                                                    >
                                                        Remove
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </ImageUploading>
        </Box>
    )
}

export default UploaderComponent
