export interface ISpeg {
    parser: {
        parser: Function,
        state: {
            lastExpectations: [{
                position: number;
                rule: string;
                type: string;
            }];
            position: number;
            text: string;
        };
    };
    speg_parser: {
        action: string;
        children: [{
            name: string;
            parser: Function;
        }]
        end_position: number;
        match: string;
        start_position: number;
        type: string;
    };
    state: {
        position: number;
        text: string;
        succesfullRules?: [{
            end_position: number;
            match: string,
            rule: string;
            start_position: number;
            text: string;
        }];
        failedRules: [{
            rule: string
            start_position: number
        }];
        failedTags: string[];
        lastExpectations: [{
            position: number;
            rule: string;
            type: string;
        }];
        rules: [{
            name: string;
            parser: Function
        }];
    };
    visitor: {
        actions: {};
    };
}

