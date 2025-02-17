<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250217133232 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD623F9485');
        $this->addSql('DROP INDEX IDX_D34A04AD623F9485 ON product');
        $this->addSql('ALTER TABLE product ADD fashion_id INT DEFAULT NULL, ADD stock_id INT NOT NULL, CHANGE trader_id_id trader_id INT NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD1273968F FOREIGN KEY (trader_id) REFERENCES trader (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD988D3F4B FOREIGN KEY (fashion_id) REFERENCES fashion (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADDCD6110 FOREIGN KEY (stock_id) REFERENCES stock (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD1273968F ON product (trader_id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD988D3F4B ON product (fashion_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_D34A04ADDCD6110 ON product (stock_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD1273968F');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD988D3F4B');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADDCD6110');
        $this->addSql('DROP INDEX IDX_D34A04AD1273968F ON product');
        $this->addSql('DROP INDEX IDX_D34A04AD988D3F4B ON product');
        $this->addSql('DROP INDEX UNIQ_D34A04ADDCD6110 ON product');
        $this->addSql('ALTER TABLE product ADD trader_id_id INT NOT NULL, DROP trader_id, DROP fashion_id, DROP stock_id');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD623F9485 FOREIGN KEY (trader_id_id) REFERENCES trader (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D34A04AD623F9485 ON product (trader_id_id)');
    }
}
