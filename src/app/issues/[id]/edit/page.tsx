import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import IssueFormSkeleton from './loading';
import prisma from 'prisma/client';

interface Props {
  params: { id: string };
}

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
