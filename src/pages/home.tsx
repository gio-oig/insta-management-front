import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { getDataFromInstaApi, saveSearchItem } from "src/lib/api";
import InstaItemCard from "src/components/cards/instaItemCard";

export type User = {
  username: string;
  full_name: string;
  profile_pic_url: string;
};

export type HashTag = {
  name: string;
  media_count: number;
  profile_pic_url: string;
};

type ContentTypes = "user" | "tag";

const Home = () => {
  const [search, setSearch] = useState("");
  const [contentType, setContentType] = useState<ContentTypes>("user");
  const [hashtags, setHashtags] = useState<{ hashtag: HashTag }[]>([]);
  const [users, setUsers] = useState<{ user: User }[]>([]);

  const getData = async (searchQuery: string, type: string) => {
    const data = await getDataFromInstaApi(searchQuery);

    if (type === "user") {
      setUsers(data.users);
    } else {
      setHashtags(data.hashtags);
    }
  };

  const handelSaveUser = (item: User) => {
    saveSearchItem({
      type: "user",
      name: item.full_name,
      image: item.profile_pic_url,
    });
  };

  const handelSaveTag = (item: HashTag) => {
    saveSearchItem({
      type: "tag",
      name: item.name,
      image: item.profile_pic_url,
      mediaCount: item.media_count,
    });
  };

  const handelSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contType: ContentTypes = search.startsWith("#") ? "tag" : "user";
    setContentType(contType);
    getData(search, contType);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid my="20px">
        <form onSubmit={handelSearch}>
          <TextField
            id="filled-basic"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            placeholder="search..."
          />
        </form>
      </Grid>
      <Grid container direction="column" gap={2}>
        {contentType === "user" &&
          users.map(({ user }) => (
            <InstaItemCard
              type="user"
              image={user.profile_pic_url}
              name={user.full_name}
              onSave={() => handelSaveUser(user)}
            />
          ))}
        {contentType === "tag" &&
          hashtags.map(({ hashtag }) => (
            <InstaItemCard
              type="tag"
              image={hashtag.profile_pic_url}
              name={hashtag.name}
              mediaCount={hashtag.media_count}
              onSave={() => handelSaveTag(hashtag)}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default Home;
