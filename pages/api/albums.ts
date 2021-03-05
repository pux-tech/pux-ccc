/*
 * pages/api/albums.ts
 * Description: Top selling albums REST endpoint returning JSON
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * Copyright (c) 2021 PredictiveUX
 */
import { NextApiRequest, NextApiResponse } from 'next'

import albumData from '__data__/topSellingAlbums.json'

export default (req: NextApiRequest, res: NextApiResponse): any => {
  res.status(200).json(albumData)
}
