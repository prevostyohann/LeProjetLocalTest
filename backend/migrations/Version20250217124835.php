<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250217124835 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD trader_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD623F9485 FOREIGN KEY (trader_id) REFERENCES trader (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD623F9485 ON product (trader_id)');
        $this->addSql('ALTER TABLE review ADD user_id INT NOT NULL, ADD trader_id INT NOT NULL');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C69D86650F FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6623F9485 FOREIGN KEY (trader_id) REFERENCES trader (id)');
        $this->addSql('CREATE INDEX IDX_794381C69D86650F ON review (user_id)');
        $this->addSql('CREATE INDEX IDX_794381C6623F9485 ON review (trader_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD623F9485');
        $this->addSql('DROP INDEX IDX_D34A04AD623F9485 ON product');
        $this->addSql('ALTER TABLE product DROP trader_id');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C69D86650F');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6623F9485');
        $this->addSql('DROP INDEX IDX_794381C69D86650F ON review');
        $this->addSql('DROP INDEX IDX_794381C6623F9485 ON review');
        $this->addSql('ALTER TABLE review DROP user_id, DROP trader_id');
    }
}
