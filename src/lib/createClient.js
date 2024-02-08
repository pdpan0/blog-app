import * as contentful from 'contentful';

import { spaceId, accessToken } from '../constants';

export const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken,
});