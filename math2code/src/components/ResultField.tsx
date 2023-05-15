import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import CodeField from "./CodeField";
import React from "react";
import { ContentCopy } from "@mui/icons-material";
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const ResultField = (props: {
  text: string;
  language: string;
  heading?: string;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      title="Copied to Clipboard!"
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={open}
      disableTouchListener
    >
      <Card
        onClick={() => {
          handleTooltipOpen();
          copyToClipboard(props.text);
        }} 
        sx={{
            cursor: "pointer",
        }}
        aria-label="Copy to clipboard"
      >
        <CardActionArea>

          <CardContent>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Typography variant="h5">
              {props.heading ?? props.language}:
            </Typography>
            
          </Box>
            <CodeField language={props.language} code={props.text} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default ResultField;
