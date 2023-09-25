export interface Props {
    name: string;
    type: string;
    default: string;
    description: string;
    required: boolean;
}

export interface Component {
    key: string;
    title: string;
    url: string;
    description: string;
    props: Props[];
    exampleUrl: string;
    exampleTitle: string;
    nextUrl: string;
    nextUrlTitle: string;
}
