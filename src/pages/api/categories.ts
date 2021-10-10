import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  res.status(200).json(['Beer', 'Wine', 'Spirits', 'Cider']);
}
