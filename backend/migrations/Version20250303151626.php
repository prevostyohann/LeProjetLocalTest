<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250303151626 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE trader ADD sub_category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trader ADD CONSTRAINT FK_C8A621B3F7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `user` CHANGE email email VARCHAR(180) DEFAULT NULL, CHANGE roles roles JSON DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE lastname lastname VARCHAR(255) DEFAULT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE phone phone VARCHAR(255) DEFAULT NULL, CHANGE address address VARCHAR(255) DEFAULT NULL, CHANGE username username VARCHAR(255) DEFAULT NULL, CHANGE is_admin is_admin TINYINT(1) DEFAULT NULL, CHANGE profile_picture profile_picture VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE trader DROP FOREIGN KEY FK_C8A621B3F7BFE87C');
        $this->addSql('DROP INDEX IDX_C8A621B3F7BFE87C ON trader');
        $this->addSql('ALTER TABLE trader DROP sub_category_id, CHANGE category_id category_id INT DEFAULT NULL, CHANGE email email VARCHAR(180) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE name name VARCHAR(255) DEFAULT NULL, CHANGE description description LONGTEXT DEFAULT NULL, CHANGE phone phone INT DEFAULT NULL, CHANGE address address VARCHAR(255) DEFAULT NULL, CHANGE siret siret VARCHAR(255) DEFAULT NULL');
    }
}
