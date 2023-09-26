import CUITable from 'corelabui/Table';

import classes from './table.module.scss';

interface TableProps {}

const Table = (props: TableProps & any) => {
    return <CUITable {...props} className={classes.table} />;
};

export default Table;
