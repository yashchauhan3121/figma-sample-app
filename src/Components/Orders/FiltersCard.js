import React from 'react'
import LabelInput from "../Common/LabelInput";
import BalconyIcon from "@mui/icons-material/Balcony";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import {
    Header,
    Icon,
    PO,
    Responsibility,
    Search,
    Text,
    Code,
    Label,
    Clean,
} from "../Common/ComponentStyles";

const FiltersCard = () => {
    return (
        <Responsibility>
            <Header>
                <Search>
                    <IconButton>
                        <BalconyIcon sx={{ width: "15.8px", height: "16px" }} />
                    </IconButton>
                    <Text>My Responsibilities</Text>
                    <IconButton>
                        <SearchIcon sx={{ width: "15.8px", height: "16px" }} />
                    </IconButton>
                </Search>
                <PO>
                    <IconButton>
                        <Text>PO</Text>
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon
                            sx={{ width: "15.8px", height: "16px" }}
                        />
                    </IconButton>
                </PO>
                <Icon>
                    <IconButton>
                        <Badge badgeContent={4} color="success">
                            <TuneIcon sx={{ color: "#68DA6A" }} />
                        </Badge>
                    </IconButton>
                </Icon>
            </Header>
            <Code>
                <TextField
                    fullWidth
                    id="filled-number"
                    label="Coy id"
                    inputProps={{
                        style: { fontSize: 13, backgroundColor: "#F2EEEB" },
                    }}
                    defaultValue="Enter coy id"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    fullWidth
                    sx={{ marginLeft: "24px" }}
                    id="filled-number"
                    label="Order no"
                    inputProps={{
                        style: { fontSize: 13, backgroundColor: "#F2EEEB" },
                    }}
                    defaultValue="Enter order id"
                    InputLabelProps={{
                        shrink: true,
                        fontSize: "18px",
                    }}
                    variant="filled"
                />
            </Code>
            <Label>
                <Clean>
                    <LabelInput
                        icon
                        text={"Sort"}
                        color={"#020A08"}
                        fontSize={"13px"}
                        textDecoration={"underline"}
                        margin={"0px 16px 0px 0px"}
                    />
                    <LabelInput
                        icon
                        text={"Group By"}
                        color={"#020A08"}
                        fontSize={"13px"}
                        textDecoration={"underline"}
                    />
                </Clean>
                <Clean>
                    <LabelInput
                        text={"Clean"}
                        color={"#020A08"}
                        font8Size={"13px"}
                        textDecoration={"underline"}
                        margin={"0px 16px 0px 0px"}
                    />
                    <LabelInput
                        text={"Search"}
                        color={"#020A08"}
                        fontSize={"13px"}
                        textDecoration={"underline"}
                    />
                </Clean>
            </Label>
        </Responsibility>
    )
}

export default FiltersCard