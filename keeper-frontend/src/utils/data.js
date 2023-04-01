import {
  LightbulbOutlined,
  CreateOutlined,
  ArchiveOutlined,
  DeleteOutline,
} from "@mui/icons-material";

export const sidebarItems = [
  {
    name: "Notes",
    icon: <LightbulbOutlined />,
    path: "/",
  },

  {
    name: "Archive",
    icon: <ArchiveOutlined />,
    path: "/archive",
  },
  {
    name: "Bin",
    icon: <DeleteOutline />,
    path: "/bin",
  },
];

export const sidebarEdit = {
  name: "Edit label",
  icon: <CreateOutlined />,
};
