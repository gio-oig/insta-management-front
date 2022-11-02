import { useState } from "react";
import { FormikHelpers } from "formik";

import SavedItemCard from "src/components/cards/savedItemCard";
import UpdateModal from "src/components/modal/updateModal";
import useSavedSearch from "src/hooks/useSavedSearch";

import Grid from "@mui/material/Unstable_Grid2";

export type SavedSearch = {
  _id: string;
  image: string;
  type: "user" | "tag";
  name: string;
  mediaCount?: number;
};

const SavedSearchs = () => {
  const [selectedSavedItem, setSelectedSavedItem] = useState<SavedSearch>();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const openupdateModal = () => setIsUpdateModalOpen(true);

  const { savedItems, updateSavedSearchItem, deleteSavedSearchItem } =
    useSavedSearch();

  const handelUpdate = async (
    values: SavedSearch,
    _helpers: FormikHelpers<SavedSearch>
  ) => {
    updateSavedSearchItem(values._id, values);
  };

  const selectItemAndOpenModal = (item: SavedSearch) => {
    setSelectedSavedItem(item);
    openupdateModal();
  };

  const handelDelete = async (itemId: string) => {
    deleteSavedSearchItem(itemId);
  };

  return (
    <Grid container direction="column" alignItems="center" gap={2} mt={2}>
      {savedItems.map((item) => (
        <SavedItemCard
          onUpdate={() => selectItemAndOpenModal(item)}
          onDelete={() => handelDelete(item._id)}
          item={item}
        />
      ))}
      <UpdateModal
        isOpen={isUpdateModalOpen}
        handleClose={() => setIsUpdateModalOpen(false)}
        itemData={selectedSavedItem}
        handleSubmit={handelUpdate}
      />
    </Grid>
  );
};

export default SavedSearchs;
