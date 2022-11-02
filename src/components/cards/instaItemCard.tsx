import { Menu, MenuItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import { MouseEvent, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";

type InstaItemCardProps = {
  type: "tag" | "user";
  name: string;
  image: string;
  mediaCount?: number;
  onSave?: () => void;
};

const InstaItemCard = ({
  type,
  image,
  name,
  mediaCount,
  onSave,
}: InstaItemCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      p="5px 10px"
      borderRadius="5px"
      alignItems="center"
      gap="10px"
      width="100%"
      maxWidth="500px"
    >
      <Grid sm="auto">
        <Box component="img" maxWidth="48px" src={image} />
      </Grid>
      <Grid container xs>
        <Grid>
          <Typography>Name: {name}</Typography>
          {type === "tag" && <Typography>Media Count: {mediaCount}</Typography>}
        </Grid>
        <Grid marginLeft="auto">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem onClick={onSave}>save</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InstaItemCard;
