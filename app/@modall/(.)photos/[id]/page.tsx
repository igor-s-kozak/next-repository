import { Modal } from "./modal";

export default async function PhotoModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    console.log('params>>>>', params)
    const photoId = (await params).id;
    return <Modal>{photoId}</Modal>;
}