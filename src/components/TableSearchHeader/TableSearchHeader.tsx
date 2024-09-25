import { Flex, Select, Input } from "antd";
import classes from "./TableSearchHeader.module.scss";
import { pageSizes } from "../../utils/constants";

const { Option } = Select;

type Props = {
  handleSearch: (e: string) => void;
  handlePageSize: (e: number) => void;
  pageSize: number;
};

const TableSearchHeader = ({
  handleSearch,
  handlePageSize,
  pageSize,
}: Props) => (
  <Flex className={classes.tableOptions} justify="space-between">
    <Select
      onChange={(size) => handlePageSize(size)}
      className={classes.pageSize}
      defaultValue={pageSize}
    >
      {Object.values(pageSizes).map((pageSize) => (
        <Option key={pageSize} value={pageSize}>
          {pageSize}
        </Option>
      ))}
    </Select>
    <Input.Search
      onChange={(e) => handleSearch(e.target.value)}
      className={classes.search}
    />
  </Flex>
);

export default TableSearchHeader;
