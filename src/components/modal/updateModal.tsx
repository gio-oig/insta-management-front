import { useState } from "react";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormInput from "../atoms/formInput";
import { SavedSearch } from "src/pages/savedSearchs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type UpdateModalProps = {
  itemData: SavedSearch | undefined;
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (
    values: SavedSearch,
    helpers: FormikHelpers<SavedSearch>
  ) => void | Promise<any>;
};

const UpdateModal = ({
  itemData,
  handleSubmit,
  isOpen,
  handleClose,
}: UpdateModalProps) => {
  if (!itemData) return <></>;

  const isTag = itemData.type === "tag";

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={itemData}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            {(props: FormikProps<SavedSearch>) => (
              <Form>
                <Grid maxWidth="500px" container rowGap={4}>
                  <Grid xs={12}>
                    <FormInput label="Name" name="name" />
                  </Grid>
                  <Grid xs={12}>
                    <FormInput label="Image Link" name="image" />
                  </Grid>
                  {isTag && (
                    <Grid xs={12}>
                      <FormInput
                        type="number"
                        label="Media Count"
                        name="mediaCount"
                      />
                    </Grid>
                  )}
                  <Grid xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateModal;
