import { useEffect, useState } from "react";
import {
  deleteSavedSearchs,
  getSavedSearchs,
  updateSavedSearch,
} from "src/lib/api";
import { SavedSearch } from "src/pages/savedSearchs";

const useSavedSearch = () => {
  const [savedItems, setSavedItems] = useState<SavedSearch[]>([]);

  const loadSavedSearchs = async () => {
    const searchs = await getSavedSearchs();
    setSavedItems(searchs.data.items);
  };

  const updateSavedSearchItem = async (
    itemId: string,
    newData: SavedSearch
  ) => {
    await updateSavedSearch(itemId, newData);
    loadSavedSearchs();
  };

  const deleteSavedSearchItem = async (itemId: string) => {
    await deleteSavedSearchs(itemId);
    loadSavedSearchs();
  };

  useEffect(() => {
    loadSavedSearchs();
  }, []);

  return {
    savedItems,
    updateSavedSearchItem,
    deleteSavedSearchItem,
  };
};

export default useSavedSearch;
