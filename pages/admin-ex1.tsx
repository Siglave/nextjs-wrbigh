import { NextPage } from 'next/types';
import React, { useState } from 'react';

interface ModalProps {
  isShown: boolean;
  close: () => void;
}

type Proposal = {
  pieceNbr: number;
  maxPieceNbr: number;
  expiredAt: Date;
};

const Modal: React.FC<ModalProps> = ({ children, isShown, close }) => {
  if (!isShown) {
    return null;
  }

  return (
    <div style={{ background: 'gray' }}>
      <div>{children}</div>
      <button onClick={close}>Close</button>
    </div>
  );
};

interface ConfirmProposalModalProps {
  proposal: Proposal;
}

const ConfirmProposalModal: React.FC<ConfirmProposalModalProps & ModalProps> =
  ({ proposal, ...rest }) => {
    if (!proposal) {
      return null;
    }

    return (
      <Modal {...rest}>
        <p>Votre proposition de pièce est transmise au client</p>
        <p>
          Pièce proposées: {proposal.pieceNbr}/{proposal.maxPieceNbr}
        </p>
        <p>Expiration: {proposal.expiredAt.toISOString()}</p>
        <p>Vous serez averti par email si le client commande vos pièces</p>
        <a href="https://admin.dave.reparcar.ovh/find-your-part">
          Voir les autres recherches
        </a>
      </Modal>
    );
  };

const AdminPage: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null
  );
  const closeModal = () => {
    setSelectedProposal(null);
    setShowModal(false);
  };

  const sendProposal = (proposal: Proposal) => {
    setSelectedProposal(proposal);
  };

  return (
    <div>
      <button
        onClick={() => {
          sendProposal({
            pieceNbr: 1,
            maxPieceNbr: 3,
            expiredAt: new Date('03-01-2022'),
          });
          setShowModal(true);
        }}
      >
        Envoyer ma proposition
      </button>
      <ConfirmProposalModal
        proposal={selectedProposal}
        isShown={showModal}
        close={closeModal}
      />
    </div>
  );
};

export default AdminPage;
